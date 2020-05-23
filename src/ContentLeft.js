import React from 'react';

import './App.css';

function ContentLeft() {
    return (
        <div className="ContentLeft">
            <input type="hidden" name="userid" value=""/>

            <ul className="searchgroupButtongrouPurveyor">
                <li className="button sel">
                    <a href="#" data-val="all">all</a>
                </li>
                <li className="button ">
                    <a href="#" data-val="owner"> owner</a>
                </li>
                <li className="button ">
                    <a href="#" data-val="dealer">dealer</a>
                </li>
            </ul>


            <div className="searchgroup">
                <ul>
                    <li>
                        <label className="srchType">
                            <input type="checkbox" name="srchType" className="" value="T"  />
                                search titles only
                        </label>
                    </li>
                    <li>
                        <label className="hasPic">
                            <input type="checkbox" name="hasPic" className="autosubmit" value="1"  />
                                has image
                        </label>
                    </li>
                    <li>
                        <label className="postedToday">
                            <input type="checkbox" name="postedToday" className="autosubmit" value="1"  />
                                posted today
                        </label>
                    </li>
                    <li>
                        <label className="bundleDuplicates">
                            <input type="checkbox" name="bundleDuplicates" className="autosubmit" value="1"/>
                                bundle duplicates
                        </label>
                    </li>
                    <li>
                        <label className="searchNearby">
                            <input type="checkbox" name="searchNearby" className="autosubmit" value="1" />
                                include nearby areas
                        </label>
                    </li>
                </ul>
            </div>
        </div>
            );
            }

            export default ContentLeft;
