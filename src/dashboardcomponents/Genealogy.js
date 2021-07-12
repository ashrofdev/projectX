import React, { useContext, useEffect, useState } from 'react';
import {Btn, UserContext} from '../Components';
import nodeRoot from '../img/node_root.jpg';
import nodeL from '../img/nodeL.jpg';
import nodeR from '../img/nodeR.jpg';
import { getUser } from '../utils';

const Genealogy = () => {

    const [branch2, setBranch2] = useState([])
    const [branch3, setBranch3] = useState([])
    const [branch4, setBranch4] = useState([])
    const [branch5, setBranch5] = useState([])
    // const [t, setT] = useState([])

    const user = useContext(UserContext)

    useEffect(()=>{
        generateData(user.userId)
    },[user])

    const generateData = async (rootId) => {
        const branch2i = []
        const branch3i = []
        const branch4i = []
        const branch5i = []
        await getUser(rootId).then(user=>{
            if(user===undefined){
                branch2i.push("")
                branch2i.push("")
            }else {
                branch2i.push(user.downlines.left)
                branch2i.push(user.downlines.right)
            }
            setBranch2(branch2i)
        })
            branch2i.forEach( async (id)=>{
                await getUser(id).then(user=>{
                    if(user===undefined){
                        branch3i.push("")
                        branch3i.push("")
                    }else {
                        branch3i.push(user.downlines.left)
                        branch3i.push(user.downlines.right)
                    }
                }).then(()=>{
                    setBranch3(branch3i)
                })
                    
                
            })
        
            branch3i.forEach(id=>{
                getUser(id).then(user=>{
                    if(user===undefined){
                        branch4i.push("")
                        branch4i.push("")
                    }else {
                        branch4i.push(user.downlines.left)
                        branch4i.push(user.downlines.right)
                    }

                    setBranch4(branch4i)
                })
            })
        
            branch4i.forEach(id=>{
                getUser(id).then(user=>{
                    if(user===undefined){
                        branch5i.push("")
                        branch5i.push("")
                    }else {
                        branch5i.push(user.downlines.left)
                        branch5i.push(user.downlines.right)
                    }

                    setBranch5(branch5i)
                })
            })
        
       
        // setT('done')
    }

    return (
        <div className="genealogy">
            <div className="treecontainer">
            {/* // tree  */}

                <div className="tree">
                    <div className="branchlane">
                        <div className="branch">
                            <p className="p"><img src={nodeRoot} alt="node-icon" /></p>    
                            <p>1</p>
                        </div>
                    </div>

                    {/* // branch line 2 */}
                    <div className="branchlane" style={{width: '100%'}}>
                        <div className="branch">
                            {branch2[0]==="" || branch2[0]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }  
                            <p>2</p>
                        </div>
                        <div className="branch">
                            {branch2[1]==="" || branch2[1]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }  
                            <p>3</p>
                        </div>
                    </div>

                    {/* // branch line 3 */}
                    <div className="branchlane" style={{width: '97%'}}>
                        <div className="branch">
                            {branch3[0]==="" || branch3[0]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }  
                            <p>4</p>
                        </div>
                        <div className="branch">
                            {branch3[1]==="" || branch3[1]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }   
                            <p>5</p>
                        </div>
                        <div className="branch">
                            {branch3[2]==="" || branch3[2]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }    
                            <p>6</p>
                        </div>
                        <div className="branch">
                            {branch3[3]==="" || branch3[3]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }    
                            <p>7</p>
                        </div>
                    </div>

                    {/* {// branch line 4} */}
                    <div className="branchlane" style={{width: '88%'}}>
                        <div className="branch">
                            {branch4[0]==="" || branch4[0]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }      
                            <p>8</p>
                        </div>
                        <div className="branch">
                            {branch4[1]==="" || branch4[1]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>9</p>
                        </div>
                        <div className="branch">
                            {branch4[2]==="" || branch4[2]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>10</p>
                        </div>
                        <div className="branch">
                            {branch4[3]==="" || branch4[3]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>11</p>
                        </div>
                        <div className="branch">
                            {branch4[4]==="" || branch4[4]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }       
                            <p>12</p>
                        </div>
                        <div className="branch">
                            {branch4[5]==="" || branch4[5]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }       
                            <p>13</p>
                        </div>
                        <div className="branch">
                            {branch4[6]==="" || branch4[6]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }       
                            <p>14</p>
                        </div>
                        <div className="branch">
                            {branch4[7]==="" || branch4[7]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }       
                            <p>15</p>
                        </div>
                    </div>
                    <div className="branchlane" style={{width: '85%'}}>
                        <div className="branch">
                            {branch4[0]==="" || branch4[0]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>16</p>
                        </div>
                        <div className="branch">
                            {branch4[1]==="" || branch4[1]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>17</p>
                        </div>
                        <div className="branch">
                            {branch4[2]==="" || branch4[2]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>18</p>
                        </div>
                        <div className="branch">
                            {branch4[3]==="" || branch4[3]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>19</p>
                        </div>
                        <div className="branch">
                            {branch4[4]==="" || branch4[4]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>20</p>
                        </div>
                        <div className="branch">
                            {branch4[5]==="" || branch4[5]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>21</p>
                        </div>
                        <div className="branch">
                            {branch4[6]==="" || branch4[6]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>22</p>
                        </div>
                        <div className="branch">
                            {branch4[7]==="" || branch4[7]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }     
                            <p>23</p>
                        </div>
                        <div className="branch">
                            {branch4[8]==="" || branch4[8]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }  
                            <p>24</p>
                        </div>
                        <div className="branch">
                            {branch4[9]==="" || branch4[9]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }  
                            <p>25</p>
                        </div>
                        <div className="branch">
                            {branch4[10]==="" || branch4[10]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }  
                            <p>26</p>
                        </div>
                        <div className="branch">
                            {branch4[11]==="" || branch4[11]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }  
                            <p>27</p>
                        </div>
                        <div className="branch">
                            {branch4[12]==="" || branch4[12]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }  
                            <p>28</p>
                        </div>
                        <div className="branch">
                            {branch4[13]==="" || branch4[13]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }  
                            <p>29</p>
                        </div>
                        <div className="branch">
                            {branch4[14]==="" || branch4[14]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }  
                            <p>30</p>
                        </div>
                        <div className="branch">
                            {branch4[15]==="" || branch4[15]===undefined?<p className="p"></p>  :<p className="p"><img src={nodeR} alt="node-icon" /></p>  }  
                            <p>31</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="search">
                <h3>Genealogy</h3>
                <div className="form">
                    <input placeholder="Enter UserID here" />
                    <div><Btn text="Search" bgColor="gray" color="white" /></div>
                    <div><Btn text="Home" bgColor="green" color="white" /></div>
                </div>
            </div>

            <div className="downlines">
                <h3>Downlines</h3>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Left</td>
                                <td>Right</td>
                                <td>Sponsor</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>JOHN DOE (NG000000)</td>
                                <td>10</td>
                                <td>8</td>
                                <td>JOHN SMITH (NG000000)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JOHN DOE (NG000000)</td>
                                <td>6</td>
                                <td>2</td>
                                <td>JOHN SMITH (NG000000)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Genealogy;