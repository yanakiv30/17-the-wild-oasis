import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
const hasImagePath = newCabin.image?.startsWith?.(supabase);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath? newCabin.image:`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  
  //1.Create/Edit Cabin
  let query = supabase.from("cabins");

  // A) Create
  // const { data, error } = await supabase
  //   .from("cabins")
  if (!id) query.insert([{ ...newCabin, image: imagePath }]);

  // B) Edit
  if (id)
    query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  //2.Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3.Delete if error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
