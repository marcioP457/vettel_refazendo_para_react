/* eslint-disable default-case */
// Importe os módulos do Firebase
import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";
import { getDatabase, off, onValue, ref, set, update } from "firebase/database";
import { app } from "services/firebaseConfig";
import Star from "./Star";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
export default function DashboardAssessment() {
  const items = [...new Array(5).keys()];
  const [activeIndex, setActiveIndex] = useState(null);
  let submitBdAssessment = 0;

  switch (activeIndex) {
    case undefined:
      submitBdAssessment = 0;
      break;
    case 0:
      submitBdAssessment = 1;
      break;
    case 1:
      submitBdAssessment = 2;
      break;
    case 2:
      submitBdAssessment = 3;
      break;
    case 3:
      submitBdAssessment = 4;
      break;
    case 4:
      submitBdAssessment = 5;
      break;
  }

  const onClickStar = (index) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index));
  };

  const [name, setName] = useState();
  const [photoProfile, setPhotoProfile] = useState();
  const [txtAssessment, setTxtAssessment] = useState("");
  const [isAssessment, setIsAssessment] = useState(null);
  const handleTxt = (e) => {
    setTxtAssessment(e);
  };
  const auth = getAuth(app);
  const db = getFirestore();
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userId = user.uid;

      const userDocRef = doc(db, "users", userId);

      try {
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setName(userData.nome);
          setPhotoProfile(userData.fotoperfil);
        }
      } catch (error) {}
    }
  });

  const database = getDatabase();
  const user = auth.currentUser.uid;
  const referenceNo = ref(database, `assessments/${user}`);

  const userAssesment = [name, photoProfile, txtAssessment, submitBdAssessment];

  const pushBD = () => {
    const onDataChange = (snapshot) => {
      const value = snapshot.val();
      const existOnTheDB = value.assessments[user];

      if (existOnTheDB) {
        update(referenceNo, {
          userAssesment,
        });
      } else {
        set(referenceNo, {
          userAssesment,
        });
      }
      off(ref(database), "value", onDataChange);
    };
    onValue(ref(database), onDataChange);
    setIsAssessment(true)
  };

  const existAssesment = () => {
    const onDataChange = (snapshot) => {
      const value = snapshot.val();
      const existOnTheDB = value.assessments[user];
      if (existOnTheDB) {
        setIsAssessment(true);
      } else {
        setIsAssessment(false);
      }
      off(ref(database), "value", onDataChange);
    };
    onValue(ref(database), onDataChange);
  };
  console.log(isAssessment)
  const navigate = useNavigate();
  const backPage = () => navigate(-1)
  const remakeAssesment = () => setIsAssessment(false)

  useEffect(() => {
    existAssesment();
  }, []);

  return (
    <>
      <Header bg="#282D35" isDashboard></Header>
      <DashboardTop title="Avalia-nos"></DashboardTop>
      {isAssessment ? (
        <div className={styles.assessment__container}>
          <h1 className={styles.title__isAssessment}>Você já nos avaliou, deseja refazer a sua avaliação?</h1>
          <div className={styles.assessment__container__buttons}>
            <button onClick={remakeAssesment}>Refazer</button>
            <button onClick={backPage}>Voltar</button>
          </div>
        </div>
      ) : (
        <div className={styles.assessment__container}>
          <h1>Avalie nossa plataforma abaixo:</h1>
          <div className={styles.assessment__container__stars}>
            {items.map((index) => (
              <Star
                onClick={() => onClickStar(index)}
                key={`star_${index}`}
                isActive={index <= activeIndex}
              />
            ))}
          </div>
          <textarea
            placeholder="Qual foi sua experiência?"
            onChange={(e) => handleTxt(e.target.value)}
          ></textarea>
          <button onClick={pushBD} className={styles.button__submit}>
            Enviar avaliação
          </button>

          <div className={styles.box__thanks}>
            <h1>OBRIGADO PELA SUA AVALIAÇÃO!</h1>
          </div>
        </div>
      )}

      <Footer></Footer>
    </>
  );
}
