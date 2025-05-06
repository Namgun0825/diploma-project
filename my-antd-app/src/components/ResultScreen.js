'use client';
import { Card, Button, List } from 'antd';
import questionData from '@/data/question';

export default function ResultScreen({ total, result, onRestart, answers }) {
  return (
    <Card>
      <h2>Нийт оноо: {total}</h2>
      <h3 style={{ color: result.status === 'error' ? 'red' : result.status === 'warning' ? 'orange' : 'green' }}>
        {result.title}
      </h3>
      <p>{result.advice}</p>

      <h3>📝 Асуулт тус бүрийн зөвлөмж</h3>
      <List
        dataSource={questionData}
        renderItem={(q, index) => (
          <List.Item>
            <div>
              <strong>{index + 1}. {q.text}</strong>
              <p>Таны сонгосон: {answers[index]}</p>
              <p>Зөвлөмж: {q.advice[answers[index]]}</p>
            </div>
          </List.Item>
        )}
      />

      <Button type="primary" onClick={onRestart} style={{ marginTop: 20 }}>
        Дахин эхлэх
      </Button>
    </Card>
  );
}
