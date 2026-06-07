import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import BookSession from './pages/BookSession'
import Contact from './pages/Contact'
import ClassesPortal from './pages/ClassesPortal'
import ExamEngine from './pages/ExamEngine'
import ScholarshipFinder from './pages/ScholarshipFinder'
import Wellbeing from './pages/Wellbeing'
import Careers2030 from './pages/Careers2030'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ParentPortal from './pages/ParentPortal'
import AdminPanel from './pages/AdminPanel'
import InstituteRegister from './pages/InstituteRegister'
import GlobalEducation from './pages/GlobalEducation'
import TransparencyPromise from './pages/TransparencyPromise'

export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <div style={{ all: 'initial', display: 'block', fontFamily: 'system-ui, sans-serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookSession />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/classes" element={<ClassesPortal />} />
          <Route path="/exams" element={<ExamEngine />} />
          <Route path="/scholarships" element={<ScholarshipFinder />} />
          <Route path="/wellbeing" element={<Wellbeing />} />
          <Route path="/careers2030" element={<Careers2030 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/parents" element={<ParentPortal />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/institute/register" element={<InstituteRegister />} />
          <Route path="/global-education" element={<GlobalEducation />} />
          <Route path="/transparency" element={<TransparencyPromise />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </AuthProvider>
  )
}
