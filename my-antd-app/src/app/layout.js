import 'antd/dist/reset.css';
import './globals.css';

export const metadata = {
  title: 'Stress Test App',
  description: 'Stress level assessment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
