import './App.css'
import BottomBar from './components/BottomBar'

function App() {
  const navigationItems = [
    { title: "Home", iconClass: "fa fa-home", isActive: true, onClick: () => console.log("Home clicked") },
    { title: "Tasks", iconClass: "fa fa-tasks", onClick: () => console.log("Tasks clicked") },
    { title: "Goals", iconClass: "fa fa-rocket" },
    { title: "Stats", iconClass: "fa fa-chart-bar" }
  ];
  return (
    <>
      <BottomBar navigationItems={navigationItems} />
    </>
  )
}

export default App
