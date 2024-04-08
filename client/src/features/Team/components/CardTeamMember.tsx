import { useQuery } from "@tanstack/react-query";
import { FaLinkedin, FaUser } from "react-icons/fa";
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
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="flex flex-wrap lg:gap-24 md:gap-16 gap-8 justify-center items-start max-w-[1200px] p-5">
      {data?.map((member) => (
        <div key={member.idMember} className={`${styles.cards} relative bg-gradient-to-br from-accent/40 to-tertiary/40 text p-4 w-64 h-72`}>
          <div className="flex flex-col h-full ">
            <div>
            <div className="flex flex-col items-center">
              <img src={member.memberImage} alt="member image" className="w-24 h-24 rounded-full bg-primary/80 h-full self-center" />
              </div>
              <h5 className={`${styles.text} font-bold flex items-center gap-2`}><FaUser className="text-secondary text-l" />{member.memberName} {member.memberLastName}</h5>
              <p className={`${styles.text} flex items-center gap-2`}><HiUserGroup className="text-secondary text-l" />{member.memberRole}</p>
               <p className={`${styles.text} flex items-center gap-2`}><span>< FaLinkedin className="text-l text-secondary" /></span>{member.memberLinkedin.slice(0,20)}...</p>
            </div>
            <div className="flex flex-grow flex-col justify-between">
              <p className={`${styles.text} flex items-center gap-2 mb-4`}>
                <PiFileMagnifyingGlassBold className="text-secondary text-l" />
               

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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className=" bg-white bg-gradient-to-br from-primary to-accent/40 p-8 rounded-[30px] overflow-y-auto lg:max-w-[40vw] max-h-[100vh]  md:max-w-[70vw] max-h-[100vh] sm: max-w-[80vw] max-h-[100vh] ">
            <div className="flex flex-col items-center">
            <img src={selectedMember.memberImage} alt="member image" className="w-44 h-44 rounded-full bg-primary/80 h-full self-center mb-4" />
            <h5 className={`${styles.heading5} text-secondary font-bold flex items-center gap-2`}>{selectedMember.memberName} {selectedMember.memberLastName}</h5>  
            <p className={`${styles.text} flex items-center pt-2 gap-2`}>| {selectedMember.memberRole} |</p> 
            <p className={`${styles.text} flex items-center mt-2 text-center text-secondary`}>{selectedMember.memberLinkedin}</p>
           </div> 
           <p className={`${styles.text} flex text-center items-start gap-2 pb-4 pt-4`}>
              <span>{selectedMember.memberDescription}</span>
            </p> 
           

            <div className="flex flex-col items-center">
             <button className={`${styles.primaryBtn} w-[80px]`} onClick={handleCloseModal} >Cerrar</button>
          </div>
          </div>
        
        </div>
      )}
    </div>
  );
};

export default CardTeamMember;
