import { useState } from "react";
import { Layout } from "../../../components/Layout/Layout";
import { styles } from "../../../style";
import { BsCalendarHeart, BsFillPersonFill } from "react-icons/bs";
import bgUserDashboard from '../../../../public/bgUserDashboard.svg';
import UserProfile from "../components/UserProfile";

const UserPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };
  
  return (
    <Layout>
      <div className="relative overflow-hidden bg-bgUserDashboard flex flex-col lg:flex-row justify-center items-start h-fit bg-fixed py-[100px] lg:px-[50px] sm:px-10 px-3"
        style={{backgroundImage: `url(${bgUserDashboard})`, backgroundSize: 'cover'}}
      >
        <nav aria-label="User-navbar" className='flex flex-col p-0 m-0 w-fit text-secondary font-semibold'>
            <ul className='flex flex-row lg:flex-col w-fit lg:min-w-[200px] p-0 m-0'>
              <li className={[styles.item2, selectedTab === 1 ? styles.active : null].join(" ")} onClick={() => handleTabClick(1)}>
                <BsFillPersonFill className="text-2xl"/>
                <span className='lg:flex hidden'>Mi Perfil</span>
              </li>
              <li className={[styles.item2, selectedTab === 2 ? styles.active : null].join(" ")} onClick={() => handleTabClick(2)}>
                <BsCalendarHeart className="text-2xl"/>
                <span className='lg:flex hidden'>Mis Eventos</span>
              </li>
              
            </ul>
        </nav>
        <div className="bg-primary rounded-r-[24px] rounded-b-[24px] rounded-box lg:mt-[0px] p-10 lg:w-[1000px] w-full h-fit min-h-[70vh] overflow-auto">
          <div className="">
            {selectedTab === 1 && (
              <>
                { <UserProfile/> }
              </>
            )}
            {selectedTab === 2 && (
              <>
                { <h1>Mis eventos</h1> }
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UserPage;