import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIclient from "../services/api-client";


const useTrailers = (gameId: number) =>{
    const apiClient = new APIclient<Trailer>(`/games/${gameId}/movies`);

   return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: apiClient.getAll
    }) 
}

export default useTrailers;