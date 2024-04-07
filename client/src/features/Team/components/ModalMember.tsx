
// import { Member } from "../../../types/types";
// import { FaUser } from "react-icons/fa";
// import { HiUserGroup } from "react-icons/hi";
// import { PiFileMagnifyingGlassBold } from "react-icons/pi";

// interface MemberModalProps{
//     member: Member | null;
//     onClose: ()=> void;
// }
// export const ModalMember: React.FC<MemberModalProps> = ({member, onClose}) => {


//     if(!member){
//         return null;
//     }
    
//   return (
//     <>
//     <div>
//         <div>
//             <button onClick={onClose}>Close</button>
//             <img src={member.memberImage} alt="member image" />
//             <h5><FaUser/> {member.memberName} {member.memberLastName}</h5>
//             <p><HiUserGroup/>{member.memberRole}</p>
//             <p> <PiFileMagnifyingGlassBold/><span>{member.memberDescription}</span></p>
//         </div>
//     </div>
//     </>
//   )
// }
