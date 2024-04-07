import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { PiFileMagnifyingGlassBold } from "react-icons/pi";
import { getMember } from "../../../api/memberApi";
import { Member } from "../../../types/types";
import { styles } from "../../../style";
import { HiUserGroup } from "react-icons/hi";
import { useState } from "react";

const CardTeamMember = () => {
  const { data } = useQuery<Member[]>({
    queryKey: ['members'],
    queryFn: getMember
  });

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleClick = (member: Member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="flex flex-wrap lg:gap-24 md:gap-16 gap-8 justify-center items-start max-w-[1200px] p-5">
      {data?.map((member) => (
        <div key={member.idMember} className={`${styles.cards} relative bg-gradient-to-br from-accent/40 to-tertiary/40 text p-4 w-64 h-72`}>
          <div className="flex flex-col h-full ">
            <div>
            <div className="flex flex-col items-center">
              <img src={member.memberImage} alt="member image" className="w-24 h-24 rounded-full mb-4" />
              </div>
              <h5 className={`${styles.text} font-bold flex items-center gap-2`}><FaUser />{member.memberName} {member.memberLastName}</h5>
              <p className={`${styles.text} flex items-center gap-2`}><HiUserGroup />{member.memberRole}</p>
            </div>
            <div className="flex flex-grow flex-col justify-between">
              <p className={`${styles.text} flex items-center gap-2 mb-4`}>
                <PiFileMagnifyingGlassBold />
                <span>{member.memberDescription.slice(0, 20)}...</span>
              </p>
              <div className="flex justify-end">
                <button className="font-semibold text-secondary" onClick={() => handleClick(member)}>Ver más</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-[30px] max-w-md">
            <div className="flex flex-col items-center">
            <img src={selectedMember.memberImage} alt="member image" className="w-44 h-44 rounded-full mb-4" />
            </div>
            <h5 className={`${styles.text} font-bold flex items-center gap-2`}><FaUser />{selectedMember.memberName} {selectedMember.memberLastName}</h5>
            <p className={`${styles.text} flex items-center gap-2`}><HiUserGroup />{selectedMember.memberRole}</p>
            <p className={`${styles.text} flex items-start gap-2 mb-4`}>
            <div >
              <PiFileMagnifyingGlassBold />
            </div>
              <span>{selectedMember.memberDescription}</span>
            </p> 
             <button onClick={handleCloseModal} >Close</button>
          </div>
        
        </div>
      )}
    </div>
  );
};

export default CardTeamMember;
