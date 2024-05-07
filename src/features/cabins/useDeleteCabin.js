import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin, deleteCabin as deleteCabinApi} from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      alert("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return {isDeleting, deleteCabin};
}
