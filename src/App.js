import React from 'react';
import Header from './components/Header';
import OPDFlowOverview from './components/OPDFlowOverview';
import PatientQueueManagement from './components/PatientQueueManagement';
import PredictiveAnalytics from './components/PredictiveAnalytics';
import MainPage from './components/MainPage';
const App = () => {
  return (
    <div>
      <Header />
      <main>
  <MainPage />
      </main>
    </div>
  );
};

export default App;

