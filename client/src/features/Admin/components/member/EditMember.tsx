import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { MemberContext } from "../../../../hooks/useMemberContext";
import { updateMember } from "../../../../api/memberApi";
import { Member } from "../../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { styles } from "../../../../style";
import SpinerModal from "../../../../components/SpinnerModal";
import { UpdateMemberDto } from "../../../../../../server/src/member/dto/update-member.dto";

export const EditMember = () => {
  const [member, setMember] = useState<Member | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  

  const memberContext = useContext(MemberContext);

  useEffect(() => {
    if (memberContext !== undefined) {
      setMember(memberContext);
    }
  }, [memberContext]);

  const mutationFn = async ({ idMember, updatedMember }: { idMember: number, updatedMember: UpdateMemberDto }) => updateMember(idMember, updatedMember);

  const queryClient = useQueryClient();
  const mutation = useMutation<void, Error, { idMember: number, updatedMember: UpdateMemberDto }>({
    mutationFn,
    onSuccess: async () => {
      queryClient.invalidateQueries();
      await queryClient.refetchQueries();
      setLoading(false);
      setShowMessage(true);
    },
    onError: (error) => console.error('Error', error),
  });

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    if(member) setMember({ ...member, memberName: e.target.value });
  }

  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    if(member) setMember({ ...member, memberLastName: e.target.value });
  }

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    if(member) setMember({ ...member, memberDescription: e.target.value });
  }

  const onChangeRole = (e: ChangeEvent<HTMLInputElement>) => {
    if(member) setMember({ ...member, memberRole: e.target.value });
  }

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if(member) setMember({ ...member, memberImage: e.target.value });
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(member && member.idMember) {
      mutation.mutate({ idMember: member.idMember, updatedMember: member });
      setLoading(true);
    }
  }

  return (
    <>
      {showMessage ? (
        <div className="bg-primary z-[1] py-20 rounded-[24px]">
          <h1 className="text-center text-xl font-semibold text-contrast">Miembro editado con éxito!</h1>
        </div>
      ) : (
        <>
          <h1 className={`${styles.heading4} mb-8 z-[10]`} >¿Qué te gustaría editar?</h1>
          <div className="z-[10] flex flex-col content-end bg-primary rounded-[24px]">
            <form action="" onSubmit={onSubmit} className="flex flex-col bg-accent/90 w-full h-fit rounded-[24px] p-8">

              <label htmlFor="name" className={`${styles.label2}`}>Nombre:</label>
              <input
                onChange={onChangeName}
                type="text"
                aria-label='name'
                value={member?.memberName || ''}
                className={`${styles.input} mt-1 mb-4`}
              />

              <label htmlFor="last name" className={`${styles.label2}`}>Apellido/s:</label>
              <input
                onChange={onChangeLastName}
                type="text"
                value={member?.memberLastName || ''}
                className={`${styles.input} mt-1 mb-4`}
              />

              <label htmlFor="description" className={`${styles.label2}`}>Descripción:</label>
              <input
                onChange={onChangeDescription}
                type="text"
                value={member?.memberDescription || ''}
                className={`${styles.input} mt-1 mb-4`}
              />

              <label htmlFor="role" className={`${styles.label2}`}>Rol:</label>
              <input
                onChange={onChangeRole}
                type="text"
                value={member?.memberRole || ''}
                className={`${styles.input} mt-1 mb-4`}
              />

              <label htmlFor="image" className={`${styles.label2}`}>Imagen:</label>
              <input
                onChange={onChangeImage}
                type="text"
                value={member?.memberImage || ''}
                className={`${styles.input} mt-1 mb-4`}
              />

              <button type='submit' className={`${styles.primaryBtn} w-[200px] self-center mt-5`}>
                Guardar
              </button>
            </form>
          </div>
          <SpinerModal isVisible={loading} />
        </>
      )}
    </>
  )
}

export default EditMember