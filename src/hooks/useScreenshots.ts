import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";
import APIclient from "../services/api-client";


const useScreenshots = (gameId: number) =>{
    const apiClient = new APIclient<Screenshot>(`/games/${gameId}/screenshots`);

   return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
    }) 
}

export default useScreenshots;