import React, { useState } from "react";
import Popup from './Popup';
import Button from '@material-ui/core/Button';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
    }
    const togglePopup2 = () => {
        setIsOpen2(!isOpen2);
    }
    const togglePopup3 = () => {
      setIsOpen3(!isOpen3);
    }    
    const togglePopup4 = () => {
      setIsOpen4(!isOpen4);
    }    
    const togglePopup5 = () => {
      setIsOpen5(!isOpen5);
    }
    const togglePopup6 = () => {
      setIsOpen6(!isOpen6);
    }
    const togglePopup7 = () => {
      setIsOpen7(!isOpen7);
    }
return (
 <div className="Dashboard">
     <h1>TRADIS KNOWN</h1><br/>
     <div style={{display: 'flex', position: 'absolute',top:'40%',left:'65%'}}>
     <Button variant="contained" color="secondary" onClick={togglePopup}>INDIA</Button>
     </div>
     <div style={{display: 'flex', position: 'absolute',top:'10%',left:'70%'}}>
     <Button variant="contained" color="secondary" onClick={togglePopup1}>RUSSIA</Button>
     </div>
     <div style={{display: 'flex', position: 'absolute',top:'25%',left:'70%'}}>
     <Button variant="contained" color="primary" onClick={togglePopup2}>CHINA</Button>
     </div>
     <div style={{display: 'flex', position: 'absolute',top:'75%',left:'80%'}}>
     <Button variant="contained" color="secondary" onClick={togglePopup3}>AUSTRALIA</Button>
     </div>
     <div style={{display: 'flex', position: 'absolute',top:'22%',left:'20%'}}>
     <Button variant="contained" color="primary" onClick={togglePopup4}>USA</Button>
     </div>
     <div style={{display: 'flex', position: 'absolute',top:'10%',left:'10%'}}>
     <Button variant="contained" color="secondary" onClick={togglePopup5}>CANADA</Button>
     </div>
     <div style={{display: 'flex', position: 'absolute',top:'55%',left:'33%'}}>
     <Button variant="contained" color="secondary" onClick={togglePopup6}>BRAZIL</Button>
     </div>
     <div style={{display: 'flex', position: 'absolute',top:'70%',left:'50%'}}>
     <Button variant="contained" color="primary" onClick={togglePopup7}>SOUTH AFRICA</Button>
     </div>
     {isOpen && <Popup
      content={<>
        <h2>India</h2>
        <p>Indian culture is the heritage of social norms, ethical values, traditional customs, belief systems, political systems, artifacts and technologies that originated in or are associated with the Indian subcontinent.<br/>
            <br/>India is socially, culturally, and linguistically very diverse. Hindi and English are widely spoken and recognised for official purposes.Other than than, there are 22 scheduled languages recognised by the constitution of India.<br/><img src='https://www.relocatemagazine.com/media/images/India-culture_12865.jpg' style={{width:'300px',height:'200px'}}/> <img src="https://miro.medium.com/max/509/1*JSlWu0nQeQ5TVMY9PIBGtQ.jpeg" style={{width:'300px',height:'200px'}}/>
            <br/>However, more than 400 languages and dialects in India are still not known.
            Modern India stands as one of the most diverse countries in the world, a subcontinent that is home to over 100 languages, over 700 different tribes, every major religion in the world, and to some of the world's largest cities as well as remote regions with almost no people.
            <img src='https://enewsroom.in/wp-content/uploads/2020/10/different-religion-people-showing-unity-diversity-india.jpg' style={{width:'300px',height:'200px'}}/>
        </p>
      </>}
      handleClose={togglePopup}
    />}
    {isOpen1 && <Popup
      content={<>
        <h2>Russia</h2>
        <p>Russian culture has a long and rich cultural history, steeped in literature, ballet, painting and classical music. While outsiders may see the country as drab, Russia has a very visual cultural past, from its colorful folk costumes to its ornate religious symbols.<br/>
            <img src='https://www.calvertjournal.com/images/uploads/features/2019/2019_aug/SPb_diversity/hero1.jpg' style={{width:'300px',height:'200px'}}/> <img src="https://cdn.mos.cms.futurecdn.net/8YkzHGehvpPRBocsYc7bhV.jpg" style={{width:'300px',height:'200px'}}/>
            <br/>Society in Russia is characterised by a climate of appreciation for ethnic diversity; the immense variety of ethnic groups, languages and religions is perceived as an asset; progress has been observed in residency registration and in the field of minority media.<br/>
            </p></>}
      handleClose={togglePopup1}
    />}
    {isOpen2 && <Popup
      content={<>
        <h2>China</h2>
        <p>Chinese civilization is historically considered a dominant culture of East Asia. With China being one of the earliest ancient civilizations, Chinese culture exerts profound influence on the philosophy, virtue, etiquette, and traditions of Asia.<br/>
        </p></>}
      handleClose={togglePopup2}
    />}
    {isOpen3 && <Popup
      content={<>
        <h2>Australia</h2>
        <p>The culture of Australia is primarily a Western culture, derived from Britain but also influenced by the unique geography of Australia, the cultural input of Aboriginal, Torres Strait Islander and other Australian people. The British colonisation of Australia began in 1788, and waves of multi-ethnic migration followed.
        <br/></p></>}
      handleClose={togglePopup3}
    />}
    {isOpen4 && <Popup
      content={<>
        <h2>United States of America</h2>
        <p>The culture of the United States of America is primarily of Western origin, but its influences include European American, Asian American, African American, Latin American, Native American peoples and their cultures.
        The United States has its own distinct social and cultural characteristics, such as dialect, music, arts, social habits, cuisine, and folklore, otherwise known as Americana.
        The United States is ethnically diverse as a result of large-scale European immigration throughout its history, its hundreds of indigenous tribes and cultures, and through African-American slavery followed by emancipation and assimilation. America is an anglophone country which practices Anglo-American common law.
        <br/></p></>}
      handleClose={togglePopup4}
    />}
    {isOpen5 && <Popup
      content={<>
        <h2>Canada</h2>
        <p>In its broadest sense, Canadian culture is a mixture of British, French, and American influences, all of which blend and sometimes compete in every aspect of cultural life, from filmmaking and writing to cooking and playing sports.
          <br/>
          The culture of Canada embodies the artistic, culinary, literary, humour, musical, political and social elements that are representative of Canada and Canadians.
          </p></>}
      handleClose={togglePopup5}
    />}
    {isOpen6 && <Popup
      content={<>
        <h2>Brazil</h2>
        <p>The culture of Brazil is primarily Western and is derived from European Portuguese culture, but presents a very diverse nature showing that an ethnic and cultural mixing occurred in the colonial period involving mostly Indigenous people of the coastal and most accessible riverine areas, Portuguese people and African<br/>
            <img src='https://cdn.britannica.com/66/189666-050-DCD6CFFC/Carnival-parade-Rio-de-Janeiro-2014.jpg' style={{width:'300px',height:'200px'}}/> <img src="https://www.brazilevisas.com/wp-content/uploads/sites/18/2018/04/Traditions-and-Customs-in-Brazil-1280x720.jpg" style={{width:'300px',height:'200px'}}/>
            </p></>}
      handleClose={togglePopup6}
    />}
    {isOpen7 && <Popup
      content={<>
        <h2>South Africa</h2>
        <p>South Africa has been famously referred to as the rainbow nation because it is made up of so many diverse cultures and religions. Contained within South Africa's borders are Zulu, Xhosa, Pedi, Tswana, Ndebele, Khoisan, Hindu, Muslim, and Afrikaner people to name but a few.
          <br/>A century and a half of white domination in most of the country (more than three centuries in the Western Cape) and the great extent of its ties to the global market economy have profoundly transformed Black culture in South Africa.
        </p></>}
      handleClose={togglePopup7}
    />}
 </div>
);
};
export default Dashboard;
