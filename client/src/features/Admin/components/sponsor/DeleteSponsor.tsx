import { useContext, useEffect, useState } from "react";
import { styles } from "../../../../style"
import { SponsorContext } from "../../../../hooks/useSponsorContext";
import { deleteSponsor } from "../../../../api/sponsorApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteSponsorType, Sponsor } from "../../../../types/types";

const DeleteSponsor = () => {
    const [sponsorId, setSponsorId] = useState('');
    
    const sponsors = useContext(SponsorContext);

    useEffect(() => {
        if(sponsors !== undefined && sponsors?.idPotential_Sponsors !== undefined){
            setSponsorId(sponsors.idPotential_Sponsors);
        }
    }, []);
    

    const mutationFn = async ({sponsorId}: DeleteSponsorType) => deleteSponsor(sponsorId);

    const queryClient = useQueryClient();
    
    const mutation = useMutation<Sponsor, Error, DeleteSponsorType>(
        {
            mutationFn,
            onSuccess: async () => {
                queryClient.invalidateQueries();
                await queryClient.refetchQueries();
            },
            onError: (error) => console.error('Error:', error),
        }
    );

    const handleClick = () => {
        mutation.mutate({sponsorId});
    }

    return (
        <div className="flex flex-col gap-5 rounded-[16px] z-[10] bg-primary p-10">
            <h1 className="text-contrast text-xl font-semibold ">¿Estas segura que deseas borrar este registro?</h1>
            <p className="text-contrast">Haz click en aceptar para borrar registro de forma permanente.</p>
            <button onClick={handleClick} className={`${styles.cancelModalBtn} w-[200px] self-center`}>
                Aceptar
            </button>
        </div>
    )
}

export default DeleteSponsor;