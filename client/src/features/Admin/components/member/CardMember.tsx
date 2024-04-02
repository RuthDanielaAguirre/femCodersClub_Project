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
    <div className="overflow-y-auto text  ">
      {data?.map((member) => (
        <div key={member.idMember} className={`${styles.cards} flex bg-gradient-to-br from-accent/40 to-tertiary/40 text p-4 my-4  w-[full] `}>
          <img src={member.memberImage} alt="member image" className="w-24 h-24 rounded-full mr-4" />
         
          <div className="flex-1 z-2 text ">
            <h5 className={`${styles.text} font-bold flex items-center gap-2 `}><FaUser />{member.memberName} {member.memberLastName}</h5>
            <p className={`${styles.text} flex items-center gap-2`}><PiFileMagnifyingGlassBold />{member.memberDescription}</p>
            <p className={`${styles.text} flex items-center gap-2`}><HiUserGroup />{member.memberRole}</p>
          <div className='flex w-full justify-end gap-2 mr-2'>
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
    </div>
  );
};

export default CardMember;