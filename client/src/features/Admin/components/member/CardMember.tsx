import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { PiFileMagnifyingGlassBold } from "react-icons/pi";
import { getMember } from "../../../../api/memberApi";
import { styles } from "../../../../style";
import { HiUserGroup } from "react-icons/hi";
import { Member } from "../../../../types/types";
import { MemberContext } from "../../../../hooks/useMemberContext";
import AdminModal from "../AdminModal";
import EditMember from "./EditMember";
import DeleteMember from "./DeleteMember";

const CardMember = () => {
  const { data } = useQuery<Member[]>({
    queryKey: ['members'],
    queryFn: getMember
  });

  return (
    <>
      {data?.map((member) => (
        <div key={member.idMember} className={`${styles.cards} flex bg-gradient-to-br from-accent/40 to-tertiary/40 p-8 mb-8 w-full gap-6`}>
          <img src={member.memberImage} alt="member image" className="w-48 h-48 rounded-full" />
          <div className="flex-1 z-2 text space-y-3 text-secondary">
            <h5 className="flex font-semibold text-xl items-center gap-2"><FaUser />{member.memberName} {member.memberLastName}</h5>
            <p className={`${styles.text} flex items-start gap-2`}><span><PiFileMagnifyingGlassBold className="text-xl text-secondary"/></span>{member.memberDescription}</p>
            <p className={`${styles.text} flex items-center gap-2`}><span><HiUserGroup  className="text-xl text-secondary" /></span>{member.memberRole}</p>
            <div className='flex w-full justify-end gap-4 mr-2'>
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