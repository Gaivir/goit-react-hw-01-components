import React from 'react';
// import PropTypes from 'prop-types';
import './Statistics.module.css';




const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

        <ul class="stat-list"> {stats.map(({ id, label, percentage }) => (
            <li key={id} className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>
      
        ))}
    
        </ul>
        </section>
    )
   

}

export default Statistics;