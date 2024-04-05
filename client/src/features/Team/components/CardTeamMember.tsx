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

    const [extended, setExtended] = useState<{[key: string]: boolean}>({});

    const toggleExtended = (memberId: number) =>{
        setExtended( prevState=>({
            ...prevState,
            [memberId]: !prevState[memberId]
        }))
    }
   
    return (
        <div className="flex flex-wrap gap-10 justify-center items-start max-w-[1200px]">
            {data?.map((member) => (
                <div key={member.idMember} className={`${styles.cards} relative bg-gradient-to-br from-accent/40 to-tertiary/40 text p-4 w-80 h-72`}>
                    <div className="flex flex-col h-full">
                        <div>
                            <img src={member.memberImage} alt="member image" className="w-24 h-24 rounded-full mb-4" />
                            <h5 className={`${styles.text} font-bold flex items-center gap-2`}><FaUser />{member.memberName} {member.memberLastName}</h5>
                            <p className={`${styles.text} flex items-center gap-2`}><HiUserGroup />{member.memberRole}</p>
                        </div>
                        <div className="flex flex-grow flex-col justify-between">
                            <p className={`${styles.text} flex items-center gap-2 mb-4`}>
                                <PiFileMagnifyingGlassBold />
                                <span>{extended[member.idMember] ? member.memberDescription : `${member.memberDescription.slice(0, 20)}...`}</span>
                            </p>
                            <div className="flex justify-end">
                                <button className="font-semibold text-secondary" onClick={() => toggleExtended(member.idMember)}>{extended[member.idMember] ? "Cerrar" : "Ver más"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardTeamMember;