type Money = number;
type MaximumMoney = number;

var rob = function(houseValues: Array<Money>) {
  const numOfHouse = houseValues.length;

  const maxiumValues: MaximumMoney[] = houseValues.reduce(
    (values: MaximumMoney[], money: Money, houseIndex: number) => {
      // if only 1 house -> rob it
      if (houseIndex === 0) {
        values.push(money);
        return values;
      }
      // if have 2 houses, rob at the house that has more money
      if (houseIndex === 1) {
        values.push(Math.max(houseValues[0], money));
        return values;
      }

      // if have 3 houses, -> rob at (0,2) or (1)
      if (houseIndex === 2) {
        values.push(Math.max(houseValues[2 - 2] + money, houseValues[1]));
        return values;
      }

      // -> formula
      values.push(
        Math.max(values[houseIndex - 2] + money, values[houseIndex - 1])
      );
      return values;
    },
    []
  );

  return maxiumValues[numOfHouse - 1];
};

export default rob;
