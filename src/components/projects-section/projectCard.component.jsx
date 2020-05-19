import React from 'react';
import { Card, Tag, Timeline, Tooltip } from 'antd';

const ProjectCard = ({ title, description, source, tags, date, tooltipColor, tooltipPlacement, tooltipTitle, lastEl }) => {

  return (
    <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
      <Timeline.Item color={tooltipColor}>
        {date}
        <Card size="small" title={title} hoverable>
          <p>
            {description}
          </p>
          <p>
            {source}
          </p>
          {tags.map(tag => <Tag color={tag.color} style={{ color: tag.fontColor ? tag.fontColor : null }} >{tag.name}</Tag>)}
        </Card>
      </Timeline.Item>
    </Tooltip>
  )
}


export default ProjectCard