'use client';
import { useState, useEffect } from 'react';
import { Progress, Button, Card, List } from 'antd';
import questions from '@/data/question';

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [today, setToday] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const date = new Date();
      setToday(`${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`);
    }
  }, []);

  const saveAnswer = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = value;
    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert('Бүх асуултад хариулна уу!');
      return;
    }
    setSubmitted(true);
  };

  const resetTest = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentIndex(0);
    setSubmitted(false);
  };

  const totalScore = answers.reduce((sum, val) => sum + (val !== null ? val : 0), 0);

  const getResultLevel = (score) => {
    if (score <= 15) return { title: '🌿 Хөнгөн стресс', advice: 'Та одоогоор сэтгэл зүйн хувьд тайван, сөрөг нөлөөлөл багатай байна. Зарим бага зэргийн ядаргаа, сэтгэл санааны хэлбэлзэл байж болох ч энэ нь энгийн хүрээнд байна.Амьдралын хэв маягаа хадгалах, эрүүл дадлаа үргэлжлүүлээрэй. Хувийн амралт, амжилтаа тэмдэглэх, амьдралын зорилгоо бататгах нь үр дүнтэй..' };
    if (score <= 25) return { title: '⚠️ Илэрхий стресс', advice: 'Сэтгэл зүйн болон бие махбодын ачаалал мэдэгдэхүйц нэмэгдсэн. Гэсэн ч энэ нь хэт аюултай түвшинд хүрээгүй.Дасгал хөдөлгөөн, амралт, амьсгалын дасгал, харилцаагаа сэргээх алхам хэрэгтэй. Ядаргаа хэтрэхээс сэргийлж долоо хоногт дор хаяж нэг бүтэн өдрийг өөртөө зориулах хэрэгтэй.' };
    if (score <= 35) return { title: '🔥 Туйлдаж буй төлөв', advice: 'Ядаргаа, сонирхлын бууралт, сэтгэл хөдлөлийн хэлбэлзэл нь ажлын бүтээмж, хувийн харилцаанд мэдэгдэхүйц нөлөөлж эхэлсэн байна.Амьдралын хэмнэлийг эргэн хар, ачааллаа хөнгөл, эрүүл мэндийн үзлэгт хамрагдаж, сэтгэл зүйн зөвлөгөө авахаар бодож эхлэх хэрэгтэй. Ганцаараа байхаас илүү дотны хүмүүстэйгээ илүү холбоотой бай.' };
    return { title: '🚨 Туйлдсан', advice: 'Мэргэжлийн сэтгэл зүйч эсвэл сэтгэцийн эмчид хандахыг зөвлөж байна. Ачааллаасаа түр холдож, орчиндоо өөрчлөлт оруул, тайвшрах аргууд (10 удаа гүнзгий амьсгал гээрээ төвлөрөх  , байгаль алхах, Дуртай хөгжимөө сонсох) зэргийг шууд хэрэгжүүрэх боломжтой.' };
  };

  const progressPercent = Math.round((answers.filter(a => a !== null).length / questions.length) * 100);

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 20 }}>
      <HeaderSection today={today} />

      {submitted ? (
        <ResultScreen
          total={totalScore}
          result={getResultLevel(totalScore)}
          answers={answers}
          onRestart={resetTest}
        />
      ) : (
        <>
          <Progress percent={progressPercent} status="active" />
          <QuestionScreen
            question={questions[currentIndex]}
            selected={answers[currentIndex]}
            onAnswer={saveAnswer}
          />
          <div style={{ marginTop: 10 }}>
            <Button onClick={goBack} disabled={currentIndex === 0} style={{ marginRight: 8 }}>
              Өмнөх
            </Button>
            {currentIndex === questions.length - 1 && (
              <Button type="primary" onClick={handleSubmit}>
                Илгээх
              </Button>
            )}
          </div>
          <p style={{ marginTop: 10 }}>
            Асуулт {currentIndex + 1} / {questions.length}
          </p>
        </>
      )}
    </div>
  );
}

function HeaderSection({ today }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '200px auto',
      justifyContent: 'center',
      rowGap: '8px',
      marginBottom: '40px',
      fontSize: '16px',
      lineHeight: 1.5,
    }}>
      <div><strong>Төсөл:</strong></div>
      <div>Стресс халшрах хам шинжийн үнэлгээг боловсронгуй болгох нь</div>
    
      <div><strong>Оюутны код:</strong></div>
      <div>B210480007</div>
    
      <div><strong>Оюутан нэр:</strong></div>
      <div>Б.Эрдэнэсайхан</div>
    
      <div><strong>Огноо:</strong></div>
      <div>{today}</div>
    
      <div><strong>Удирдагч багш:</strong></div>
      <div>Д.Цогзолмаа (Доктор/Ph.D/, Дэд проп)</div>
    
      <div><strong>Зөвлөх багш:</strong></div>
      <div>Л.Аззаяа (Магистр)</div>
    </div>
    
    
  );
}

function QuestionScreen({ question, selected, onAnswer }) {
  return (
    <Card title={question.text} style={{ marginTop: 20 }}>
      {question.options.map((option, index) => (
        <Button
          key={index}
          type={selected === index ? 'primary' : 'default'}
          onClick={() => onAnswer(index)}
          block
          style={{ marginBottom: 8 }}
        >
          {index} оноо – {option}
        </Button>
      ))}
    </Card>
  );
}

function ResultScreen({ total, result, answers, onRestart }) {
  return (
    <Card title="Таны Үр Дүн" style={{ marginTop: 20 }}>
      <h2>Нийт оноо: {total}</h2>
      <h3>{result.title}</h3>
      <p>{result.advice}</p>

      <List
        header={<strong> Зөвлөмж</strong>}
        dataSource={answers.map((ans, idx) => ({
          advice: questions[idx].advices[ans],
        }))}
        renderItem={(item) => (
          <List.Item>
            <div>
              {item.advice}
            </div>
          </List.Item>
        )}
      />

      <Button type="primary" onClick={onRestart} style={{ marginTop: 20 }}>
        Дахин эхлүүлэх
      </Button>
    </Card>
  );
}
