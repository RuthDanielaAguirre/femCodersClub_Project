import { useState, useContext } from "react";
import { MemberContext } from "../../../../hooks/useMemberContext";
import { deleteMember } from "../../../../api/memberApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { styles } from "../../../../style";
import SpinerModal from "../../../../components/SpinnerModal";

const DeleteMember = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const memberContext = useContext(MemberContext);
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, number>(
    {
      mutationFn: async (idMember: number) => {
        try {
          await deleteMember(idMember);
        } catch (error) {
          throw new Error(`Error deleting member: ${error}`);
        }
      },
      onSuccess: async () => {
        queryClient.invalidateQueries();
        await queryClient.refetchQueries();
        setLoading(false);
        setShowMessage(true);
      },
      onError: (error) => {
        console.error("Error:", error);
        setLoading(false);
      },
    }
  );

  const handleClick = async () => {
    if (memberContext && memberContext.idMember) {
      setLoading(true);
      await mutation.mutateAsync(memberContext.idMember);
    }
  };

  return (
    <>
      {showMessage ? (
        <div className="bg-primary z-[1] py-20 rounded-[24px]">
          <h1 className="text-center text-xl font-semibold text-contrast">
            Miembro eliminado con éxito!
          </h1>
        </div>
      ) : (
        <div className="flex flex-col gap-5 rounded-[16px] z-[10] bg-primary p-10">
          <h1 className="text-contrast text-xl font-semibold ">
            ¿Estás segura de que deseas borrar este registro?
          </h1>
          <p className="text-contrast">
            Haz click en aceptar para borrar el registro de forma permanente.
          </p>
          <button
            onClick={handleClick}
            className={`${styles.cancelModalBtn} w-[200px] self-center`}
          >
            Aceptar
          </button>
          <SpinerModal isVisible={loading} />
        </div>
      )}
    </>
  );
};

export default DeleteMember;