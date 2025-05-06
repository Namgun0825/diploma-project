'use client';
import { Button, Card, Space } from 'antd';

export default function QuestionScreen({ question, onAnswer, selected }) {
  const choices = [
    { value: 0, label: '0 – Хэзээ ч үгүй' },
    { value: 1, label: '1 – Хааяа' },
    { value: 2, label: '2 – Үе үе' },
    { value: 3, label: '3 – Олон удаа' },
    { value: 4, label: '4 – Үргэлж' }
  ];

  return (
    <Card style={{ width: '100%', marginTop: 20 }}>
      <h2>{question}</h2>
      <Space direction="vertical" style={{ width: '100%' }}>
        {choices.map(choice => (
          <Button
            key={choice.value}
            type={selected === choice.value ? 'primary' : 'default'}
            block
            onClick={() => onAnswer(choice.value)}
          >
            {choice.label}
          </Button>
        ))}
      </Space>
    </Card>
  );
}
