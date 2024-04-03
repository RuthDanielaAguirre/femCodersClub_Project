import { styles } from "../../../style";
import imgEvents from '../../../../public/imgEvents.png'
import iconDate from '../../../../public/iconDate.png';
import iconLocation from '../../../../public/iconLocation.png'

function CardUpcomingEvent({title, image, date, location, description, onClickViewMore}:{title:string, image:string, date:string, location:string, description:string, onClickViewMore:()=> void}) {
  return (

      <div className="w-full flex flex-col items-center bg-primary max-w-[400px] border rounded-3xl shadow md:flex-row md:max-w-4xl">
        <img className="object-cover w-full rounded-t-3xl min-h-64 md:h-auto md:w-72 md:rounded-none md:rounded-s-3xl" src={image||imgEvents} alt="" />
        <div className="flex flex-col w-full justify-between p-4 mr-4 leading-normal">
          <h5 className={`${styles.heading6} pl-2 mb-2 font-bold text-secondary`}>{title}</h5>
            <div className="flex items-center gap-2 mb-2 pl-2">
              <img src={iconDate} alt="Icon date" className="opacity-70 h-4"/>
              <p className="text-bodyText text-contrast/80">{date}</p>
            </div>
            <div className="flex items-center gap-2 pl-2">
              <img src={iconLocation} alt="Icon date" className="opacity-70 h-4"/>
              <p className="text-bodyText text-contrast/80">{location}</p>
            </div>
            <p className="pt-3 pl-2 text-bodyText text-contrast">{description}</p>
            <div className="w-full flex justify-center md:justify-end">
            <button className={`${styles.primaryBtn} w-[150px] h-[35px] mt-4`} onClick={onClickViewMore}>Ver más</button>
          </div>
        </div>
      </div>
    
  );
};

export default CardUpcomingEvent 