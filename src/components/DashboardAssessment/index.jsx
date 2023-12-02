/* eslint-disable default-case */
// Importe os módulos do Firebase
import DashboardTop from 'components/DashboardTop';
import Footer from 'components/Footer';
import Header from 'components/Header';
import {  getDatabase, off, onValue, ref, set, update } from 'firebase/database';
import { app } from 'services/firebaseConfig';
import Star from './Star';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
  export default function DashboardAssessment(){
    const items = [...(new Array(5).keys())];
    const [activeIndex, setActiveIndex] = useState(null);
    let submitBdAssessment = 0;

    switch (activeIndex) {
      case undefined:
        submitBdAssessment = 0
        break;
      case 0:
        submitBdAssessment = 1
        break;
      case 1:
        submitBdAssessment = 2
        break;
      case 2:
        submitBdAssessment = 3
        break;
      case 3:
        submitBdAssessment = 4
        break;
      case 4:
        submitBdAssessment = 5
        break;
    }
  
    const onClickStar = (index) => {
      setActiveIndex((oldState) => (oldState === index ? undefined : index));
    };


    const [name,setName] = useState();
    const [photoProfile, setPhotoProfile] = useState();
    const [txtAssessment, setTxtAssessment] = useState('');
    const handleTxt = (e) => {
        setTxtAssessment(e)
    }
    const auth = getAuth(app);
    const db = getFirestore();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userId = user.uid;

            const userDocRef = doc(db, 'users', userId);

            try {
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    setName( userData.nome)
                    setPhotoProfile(userData.fotoperfil)
                }
            } catch (error) {
            }
        }
    });

    const database = getDatabase();
    const user = auth.currentUser.uid
    const referenceNo = ref(database, `assessments/${user}`);

    const userAssesment = [
      name,
      photoProfile,
      txtAssessment,
      submitBdAssessment
    ]

    const pushBD = () => {
      const onDataChange = snapshot => {
        const value = snapshot.val();
        const existOnTheDB = value.assessments[user];
    
        if (existOnTheDB) {
          console.log('alterado');
          update(referenceNo, {
            userAssesment
          });
        } else {
          set(referenceNo, {
            userAssesment
          });
        }
        off(ref(database), 'value', onDataChange);
      };
      onValue(ref(database), onDataChange);
    };
    


    return (
        <>
        <Header bg='#282D35' isDashboard></Header>
        <DashboardTop title='Avalia-nos'></DashboardTop>
        <div>
            <h1>Avalie nossa plataforma abaixo:</h1>
            {items.map((index) => (
                <Star
                onClick={() => onClickStar(index)}
                key={`star_${index}`}
                isActive={index <= activeIndex}
                />
            ))}
            <div>ESTRELAS</div>
            <textarea placeholder='Qual foi sua experiência? (OPCIONAL)' onChange={e => handleTxt(e.target.value)}></textarea>
            <button onClick={pushBD}> Enviar avaliação </button>
        </div>

        <Footer></Footer>
        </>
    )
  }