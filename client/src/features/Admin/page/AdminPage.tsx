
import { Layout } from '../../../components/Layout/Layout'
import { useState } from 'react';
import { styles } from '../../../style';
import { IoPeopleSharp } from "react-icons/io5";
import { MdVolunteerActivism } from "react-icons/md";
import { GoSponsorTiers } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import { RiQuestionnaireFill } from "react-icons/ri";
import { BsQrCodeScan } from "react-icons/bs";
import SponsorContainer from '../components/sponsor/SponsorContainer';
import bgAdmin2 from '../../../../public/bgAdmin2.svg'
import FaqContainer from '../components/faq/FaqContainer';
import { VolunteerContainer } from '../components/volunteer/VolunteerContainer';
import QrScanner from '../components/qrCode/QrScanner';
import MemberContainer from '../components/member/MemberContainer';

'use client';

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };
  
  return (
    <Layout>
      <div className="relative overflow-hidden flex flex-col lg:flex-row justify-center items-start h-fit bg-fixed py-[100px] lg:px-[50px] sm:px-10 px-3" 
        style={{backgroundImage: `url(${bgAdmin2})`, backgroundSize: 'cover'}}
      >
        <nav aria-label="Admin-navbar" className='flex flex-col p-0 m-0 w-fit text-secondary font-semibold'>
            <ul className='flex flex-row lg:flex-col w-fit lg:min-w-[200px] p-0 m-0'>
              <li className={[styles.item, selectedTab === 1 ? styles.active : null].join(" ")} onClick={() => handleTabClick(1)}>
                <IoPeopleSharp  className="text-2xl"/>
                <span className='lg:flex hidden'>Miembros</span>
              </li>
              <li className={[styles.item, selectedTab === 2 ? styles.active : null].join(" ")} onClick={() => handleTabClick(2)}>
                <MdVolunteerActivism className="text-2xl"/>
                <span className='lg:flex hidden'>Voluntarios</span>
              </li>
              <li className={[styles.item, selectedTab === 3 ? styles.active : null].join(" ")} onClick={() => handleTabClick(3)}>
                <GoSponsorTiers className="text-2xl"/>
              <span className='lg:flex hidden'>Sponsors</span>
              </li>
              <li className={[styles.item, selectedTab === 4 ? styles.active : null].join(" ")} onClick={() => handleTabClick(4)}>
                <BiCalendar className="text-2xl"/>
                <span className='lg:flex hidden'>Eventos</span>
              </li>
              <li className={[styles.item, selectedTab === 5 ? styles.active : null].join(" ")} onClick={() => handleTabClick(5)}>
                <RiQuestionnaireFill className="text-2xl"/>
                <span className='lg:flex hidden'>FAQs</span>
              </li>
              <li className={[styles.item2, selectedTab === 6 ? styles.active : null].join(" ")} onClick={() => handleTabClick(6)}>
                <BsQrCodeScan  className="text-2xl"/>
                <span className='lg:flex hidden'>QR Scanner</span>
              </li>
            </ul>
        </nav>
        <div className="bg-primary rounded-r-[24px] rounded-b-[24px] rounded-box lg:mt-[0px] p-10 lg:w-[1000px] w-full h-fit min-h-[70vh] overflow-auto">
          <div className="">
            {selectedTab === 1 && (
              <>
                { <MemberContainer/>}
              </>
            )}
            {selectedTab === 2 && (
              <>
                { <VolunteerContainer/>}
              </>
            )}
            {selectedTab === 3 && (
              <>
                { <SponsorContainer/> }
              </>
            )}
            {selectedTab === 4 && (
              <>
                { <h1>Eventos</h1> }
              </>
            )}
            {selectedTab === 5 && (
              <>
                { <>
              
                <div className='flex h-[900px]'>
                  <FaqContainer/>
                </div>
                </>}
              </>
            )}
            {selectedTab === 6 && (
              <>
                { <QrScanner/> }
              </>
            )}
              
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminPage