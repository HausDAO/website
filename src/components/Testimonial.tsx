import Card from './Card';

interface TestimonialProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  className?: string;
}

const Testimonial = (props: TestimonialProps) => {
  const { title, description, className } = props;
  return (
    <Card className={className}>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full">
          <h4 className="mb-2 text-2xl text-white">{title}</h4>
          <p className="mb-3 text-white">{description}</p>
        </div>
        {/* <div className="ml-auto mt-auto text-right">
          <Button
            bgColor="white"
            borderColor="white"
            textColor="secondary"
            className="object-right-bottom"
          >
            <a href={href}>{buttonText}</a>
          </Button>
        </div> */}
      </div>
    </Card>
  );
};

export default Testimonial;
