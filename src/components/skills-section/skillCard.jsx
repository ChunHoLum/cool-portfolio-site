import React from 'react';
import { Rate } from 'antd';
// import { LikeOutlined } from '@ant-design/icons';

const SkillCard = (props) => {
  const { title, description, skills } = props.skill;


  return (
    <div className="skills__card"  >
      <div className="skills__card__title">
        {title}
      </div>
      {skills.map((skill, index) =>
        <div className="skills__card__skills" key={index}>
          <span>
            {skill.name}
          </span>
          <span>
            <Rate
              disabled
              allowHalf
              defaultValue={skill.rating}
              style={{ color: "#3097FF", fontSize: "1rem" }}
            />
          </span>
        </div>
      )}
      <div className="skills__card__description">
        {description}
      </div>
      < div className="skills__card__footer" >
        more
      </div>
    </div>
  )
}


export default SkillCard;
