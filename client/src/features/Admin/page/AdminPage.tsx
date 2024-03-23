
import { Layout } from '../../../components/Layout/Layout'
import { Sidebar } from 'flowbite-react';
import { useState } from 'react';
import { styles } from '../../../style';
import { IoPeopleSharp } from "react-icons/io5";
import { MdVolunteerActivism } from "react-icons/md";
import { GoSponsorTiers } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import { RiQuestionnaireFill } from "react-icons/ri";

'use client';

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };
  
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-center items-start bg-[url('../../../public/bg-admin2.svg')] bg-no-repeat bg-cover bg-fixed py-[100px] lg:px-[100px] sm:px-10 px-3">
        <Sidebar aria-label="Admin-navbar" className='py-0 m-0'>
          <Sidebar.Items className='py-0 m-0'>
            <Sidebar.ItemGroup className='flex flex-row lg:flex-col gap-2 py-0 m-0'>
              <Sidebar.Item href="#" icon={IoPeopleSharp}  className={[styles.item, selectedTab === 1 ? styles.active : null].join(" ")} onClick={() => handleTabClick(1)}>
                <span className='lg:flex hidden'>Miembros</span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={MdVolunteerActivism} className={[styles.item, selectedTab === 2 ? styles.active : null].join(" ")} onClick={() => handleTabClick(2)}>
              <span className='lg:flex hidden'>Voluntarios</span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={GoSponsorTiers}  className={[styles.item, selectedTab === 3 ? styles.active : null].join(" ")} onClick={() => handleTabClick(3)}>
              <span className='lg:flex hidden'>Sponsors</span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BiCalendar} className={[styles.item, selectedTab === 4 ? styles.active : null].join(" ")} onClick={() => handleTabClick(4)}>
              <span className='lg:flex hidden'>Eventos</span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={RiQuestionnaireFill} className={[styles.item, selectedTab === 5 ? styles.active : null].join(" ")} onClick={() => handleTabClick(5)}>
              <span className='lg:flex hidden'>FAQs</span>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className="bg-primary border-2 rounded-[24px] border border-base-300 rounded-box lg:mt-[18px] mt-[1px] p-10 lg:w-[1000px] w-full h-fit min-h-[500px] overflow-auto">
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
                { <h1>Sponsors</h1> }
              </>
            )}
            {selectedTab === 4 && (
              <>
                { <h1>Eventos</h1> }
              </>
            )}
            {selectedTab === 5 && (
              <>
                { <h1>FAQs</h1> }
              </>
            )}
              
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminPage