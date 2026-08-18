import { useQuery } from "@tanstack/react-query";
import { fetchSampleData } from "../services/sampleService";
import { useSnackbar } from "notistack";

export const useSampleResponse = () => {

    const { enqueueSnackbar } = useSnackbar()

    return useQuery({
        queryKey: ["sampleData"],
        queryFn: () => {
            return fetchSampleData<any>();
        },
        onSuccess: () => {
            enqueueSnackbar("Sample data fetched successfully !", { variant: 'success' })

        },
        onError: () => {
            enqueueSnackbar("Failed to fetch sample data !", { variant: 'error' })
        }
    });


}