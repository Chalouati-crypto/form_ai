import { useMutation, useQueryClient } from "react-query";
import { generateAiResponse } from "../services/aiApi";

export function useAiResponse() {
  const queryClient = useQueryClient();
  const { mutate: getIntro, isLoading: isGettingIntro } = useMutation({
    mutationFn: generateAiResponse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["paragraph"] });
    },
  });
  return { isGettingIntro, getIntro };
}

export default useAiResponse;
