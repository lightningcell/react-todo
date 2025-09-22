import './App.css'
import BottomBar from './components/BottomBar'
import BoxSelector from './components/BoxSelector';
import TextBox from './components/TextBox'

function App() {
  const navigationItems = [
    { title: "Home", iconClass: "fa fa-home", isActive: true, onClick: () => console.log("Home clicked") },
    { title: "Tasks", iconClass: "fa fa-tasks", onClick: () => console.log("Tasks clicked") },
    { title: "Goals", iconClass: "fa fa-rocket" },
    { title: "Stats", iconClass: "fa fa-chart-bar" }
  ];
  return (
    <>
      <div className="app-main">
        <TextBox placeholder="Search tasks..." value="" onChange={(val) => console.log(val)} />
        <BoxSelector
          options={[
            { option: "All", onClick: () => console.log("All clicked") },
            { option: "Active", onClick: () => console.log("Active clicked") },
            { option: "Completed", onClick: () => console.log("Completed clicked") }
          ]}
          selectedOption="All" onSelect={(option) => console.log(option)} style='compact' />

        <BoxSelector options={[
          { option: "Date", iconClass: "fa fa-calendar", onClick: () => console.log("Date clicked") },
          { option: "Priority", iconClass: "fa fa-exclamation-circle", onClick: () => console.log("Priority clicked") },
          { option: "Alphabetical", iconClass: "fa fa-sort-alpha-down", onClick: () => console.log("Alphabetical clicked") }
        ]} selectedOption="Date" onSelect={(option) => console.log(option)} style='pill' />
      </div>
      <BottomBar navigationItems={navigationItems} />
    </>
  )
}

export default App
