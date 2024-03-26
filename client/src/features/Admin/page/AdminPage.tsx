
import { Layout } from '../../../components/Layout/Layout'
import { useState } from 'react';
import { styles } from '../../../style';
import { IoPeopleSharp } from "react-icons/io5";
import { MdVolunteerActivism } from "react-icons/md";
import { GoSponsorTiers } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import { RiQuestionnaireFill } from "react-icons/ri";
import SponsorContainer from '../components/sponsor/SponsorContainer';

'use client';

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };
  
  return (
    <Layout>
      <div className="flex flex-col gap-2 lg:flex-row justify-center items-start bg-[url('../../../public/bg-admin2.svg')] bg-no-repeat bg-cover h-fit bg-fixed py-[100px] lg:px-[100px] sm:px-10 px-3">
        <nav aria-label="Admin-navbar" className='flex flex-col p-0 m-0 w-fit lg:rounded-[24px] overflow-hidden bg-gray-40 text-secondary font-semibold'>
            <ul className='flex flex-row lg:flex-col w-fit lg:min-w-[200px] gap-2 p-0 m-0'>
              <li className={[styles.item, selectedTab === 1 ? styles.active : null].join(" ")} onClick={() => handleTabClick(1)}>
                <IoPeopleSharp/>
                <span className='lg:flex hidden'>Miembros</span>
              </li>
              <li className={[styles.item, selectedTab === 2 ? styles.active : null].join(" ")} onClick={() => handleTabClick(2)}>
                <MdVolunteerActivism/>
                <span className='lg:flex hidden'>Voluntarios</span>
              </li>
              <li className={[styles.item, selectedTab === 3 ? styles.active : null].join(" ")} onClick={() => handleTabClick(3)}>
                <GoSponsorTiers/>
              <span className='lg:flex hidden'>Sponsors</span>
              </li>
              <li className={[styles.item, selectedTab === 4 ? styles.active : null].join(" ")} onClick={() => handleTabClick(4)}>
                <BiCalendar/>
                <span className='lg:flex hidden'>Eventos</span>
              </li>
              <li className={[styles.item, selectedTab === 5 ? styles.active : null].join(" ")} onClick={() => handleTabClick(5)}>
                <RiQuestionnaireFill/>
                <span className='lg:flex hidden'>FAQs</span>
              </li>
            </ul>
        </nav>
        <div className="bg-gray-50 border-2 rounded-[24px] border border-base-300 rounded-box lg:mt-[0px] mt-2 p-10 lg:w-[1000px] w-full h-fit min-h-[70vh] overflow-auto">
          <div className="">
            {selectedTab === 1 && (
              <>
                { <h1>Miembros</h1> }
              </>
            )}
            {selectedTab === 2 && (
              <>
                { <h1>Voluntarios</h1> }
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
                <h1>FAQs</h1> 
                <div className='flex h-[900px]'></div>
                </>}
              </>
            )}
              
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminPage