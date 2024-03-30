import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainDashboard from './components/MainDashboard';

function App() {
    return (
        <>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <MainDashboard/>
            </div>
        </>
    );
}

export default App;
