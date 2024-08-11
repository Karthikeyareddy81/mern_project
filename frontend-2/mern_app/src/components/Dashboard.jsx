import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const navigate = useNavigate();
    const [obj,setObj] = useState({"description":"","timer":"","link":"",visible:""});
    const handleSubmit = async () => {
        const {data} = await axios.post("http://localhost:5000/insert", {"description":ref1.current.value,
                                                            "timer":parseInt(ref1.current.value),
                                                            "link":ref1.current.value,
                                                            "visible":ref1.current.value});
        const {msg} = data;
        if(msg == "record saved successfully !!!"){
            navigate("/");
        }else{
            navigate("/dashboard");
        }
    };
    const func_one = (event)=>{
        setObj({...obj, [event.target.name] : event.target.value});
    }
    return (
        <div className="dashboard">
            <h2>Banner Controls</h2>
            <label>
                Description:
                <input 
                    type="text" 
                    ref={ref1}
                    value={description}
                    onChange={func_one} 
                />
            </label>
            <label>
                Timer (seconds):
                <input 
                    type="number" 
                    ref={ref2}
                    value={timer} 
                    onChange={func_one} 
                />
            </label>
            <label>
                Link:
                <input 
                    type="text" 
                    ref={ref3}
                    value={link} 
                    onChange={func_one} 
                />
            </label>
            <label>
                Banner Visible:
                <input 
                    type="checkbox" 
                    ref={ref4}
                    checked={visible} 
                    onChange={func_one} 
                />
            </label>
            <button onClick={handleSubmit}>Update Banner</button>
        </div>
    );
};

export default Dashboard;
