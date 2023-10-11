import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClient, {FetchResponse}  from "../services/api-client";


interface Platform {
  id: number;
  name: string;
  slug: string;
}


/*const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });*/

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res=> res.data),
  staleTime: 24*60*60*1000, // 24 hodin
  initialData: {count: platforms.length, results: platforms}
})

export default usePlatforms;