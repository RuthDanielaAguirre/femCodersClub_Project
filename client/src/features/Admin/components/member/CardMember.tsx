import { useQuery } from "@tanstack/react-query";
import { FaLinkedin, FaUser } from "react-icons/fa";
import { PiFileMagnifyingGlassBold } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import { styles } from "../../../../style";
import { Member } from "../../../../types/types";
import { MemberContext } from "../../../../hooks/useMemberContext";
import AdminModal from "../AdminModal";
import EditMember from "./EditMember";
import DeleteMember from "./DeleteMember";
import { getMember } from "../../../../api/memberApi";
import Spinner from "../../../../components/Spinner";

const CardMember = () => {
  const { data, isLoading, isError } = useQuery<Member[], Error, Member[]>({
    queryKey: ['members'],
    queryFn: getMember
  });

  if (isLoading){
      return (
        <div className="flex justify-center items-center w-full h-full">
          <Spinner />
        </div>
      )
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h1>Oh vaya! Parece que algo ha ido mal... </h1>
        <p>Intentalo de nuevo mas tarde...</p>
      </div>
    )
  }

  return (
    <>
      {data?.map((member) => (
        <div key={member.idMember} className={`${styles.cards} flex flex-col md:flex-row bg-gradient-to-br from-accent/40 to-tertiary/40 p-8 mb-8 w-full gap-6`}>
          <img src={member.memberImage} alt="member image" className="w-48 h-48 rounded-full bg-primary/80 h-full self-center" />
          <div className="flex-1 z-2 text space-y-3 text-secondary">
            <h5 className="flex font-semibold text-xl items-center gap-2"><FaUser />{member.memberName} {member.memberLastName}</h5>
            <p className={`${styles.text} flex items-start gap-2`}><span><PiFileMagnifyingGlassBold className="text-xl text-secondary"/></span>{member.memberDescription}</p>
            <p className={`${styles.text} flex items-center gap-2`}><span><HiUserGroup  className="text-xl text-secondary" /></span>{member.memberRole}</p>
            <p className={`${styles.text} flex items-center gap-2`}><span>< FaLinkedin className="text-xl text-secondary" /></span>{member.memberLinkedin}</p>
            <div className='flex flex-col sm:flex-row  w-full justify-end gap-4 mr-2'>
              <MemberContext.Provider value={member}>
                <AdminModal
                    text = 'Editar'
                    width = '120px'
                    fontColor = 'tertiary'
                    fonthover= 'primary'
                    bg = 'primary'
                >
                    <EditMember/>
                </AdminModal>
                <AdminModal 
                    text = 'Borrar'
                    width = '120px'
                    fontColor = 'secondary'
                    fonthover= 'primary'
                    bg = 'primary'
                >
                    <DeleteMember/>
                </AdminModal>
              </MemberContext.Provider>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardMember;