import { getCountries } from '@yusifaliyevpro/countries';
import { CountryPicker } from '@yusifaliyevpro/countries/types';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import Table from '@/components/UI/Table';
import { countryFields } from '@/lib/fields';

const SummaryTitle = styled.h1`
  padding-top: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const CountryList = (props: any) => {
  const { data: countries, isLoading } = useQuery<CountryPicker<typeof countryFields>[] | null>({
    queryKey: ['countries', countryFields],
    queryFn: () => getCountries({ fields: countryFields }),
    staleTime: 60 * 60 * 24 * 1000 // 1 day stale time
  });

  return (
    <section>
      <SummaryTitle>{props.title}</SummaryTitle>
      {isLoading ? <p>Loading...</p> : countries && <Table countries={countries} />}
    </section>
  );
};

export default CountryList;
