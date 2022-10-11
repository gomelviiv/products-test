import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Dropdown from "../../shared/Dropdown";
import { Product } from "../../redux/components/data/__types__";
import { Typography } from "@mui/material";

interface Props {
  category: string[];
  filteredProduct: Product[];
  filterDate: (type: string) => void;
}

const Home: FC<Props> = ({ category, filteredProduct, filterDate }) => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Displaying the rating and title",
    },
    series: [
      {
        data: filteredProduct.map((value) => value.rating),
      },
    ],
    xAxis: {
      categories: filteredProduct.map((value) => value.title),
    },
    yAxis: {
      max: 5,
    },
  };

  return (
    <>
      {!!category.length ? (
        <Dropdown options={category} onChange={filterDate} />
      ) : (
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          пум-пум-пум, категорий нет :(
        </Typography>
      )}
      {!!filteredProduct.length && (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </>
  );
};

export default Home;
