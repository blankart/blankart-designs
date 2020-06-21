import { Box, Text, Image, Paragraph } from "grommet";

const ServiceItem = ({ key, src, title, content, ...args }) => {
  return (
    <Box
      {...args}
      key={key}
      align="center"
      justify="center"
      gap="small"
      width="medium"
    >
      <Image src={src} />
      <Text color="background" size="xxlarge" weight="bold" textAlign="center">
        {title}
      </Text>
      <Paragraph size="large" color="dark-4" textAlign="center">
        {content}
      </Paragraph>
    </Box>
  );
};

export default ServiceItem;
