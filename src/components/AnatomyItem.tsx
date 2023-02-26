import Card from './Card';

interface AnatomyItemProps {
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  className?: string;
}

const AnatomyItem = (props: AnatomyItemProps) => {
  const { title, description, highlights, className } = props;
  return (
    <Card className={className}>
      <div className="display flex flex-col">
        <h3 className="mb-6 uppercase">{title}</h3>
        <p>{description}</p>
      </div>
      {highlights && highlights.length > 0 && (
        <div className="">
          <h4 className="mb-6">Other stuff?</h4>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default AnatomyItem;
