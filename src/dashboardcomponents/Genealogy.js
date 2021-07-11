import React from 'react';
import {Btn} from '../Components'

const Genealogy = () => {
    return (
        <div className="genealogy">
            <div className="treecontainer">
            {/* // tree  */}

                <div className="tree">
                    <div className="branchlane">
                        <div className="branch">
                            <span>.</span>    
                            <p>1</p>
                        </div>
                    </div>
                    <div className="branchlane" style={{width: '100%'}}>
                        <div className="branch">
                            <span>.</span>    
                            <p>2</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>3</p>
                        </div>
                    </div>
                    <div className="branchlane" style={{width: '97%'}}>
                        <div className="branch">
                            <span>.</span>    
                            <p>4</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>5</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>6</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>7</p>
                        </div>
                    </div>
                    <div className="branchlane" style={{width: '88%'}}>
                        <div className="branch">
                            <span>.</span>    
                            <p>8</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>9</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>10</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>11</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>12</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>13</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>14</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>15</p>
                        </div>
                    </div>
                    <div className="branchlane" style={{width: '85%'}}>
                        <div className="branch">
                            <span>.</span>    
                            <p>16</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>17</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>18</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>19</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>20</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>21</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>22</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>23</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>24</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>25</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>26</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>27</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>28</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>29</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
                            <p>30</p>
                        </div>
                        <div className="branch">
                            <span>.</span>    
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