import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { districts, getDistrict, getAllDistrictSlugs } from '@/data/districts';
import Temples from '@/components/Temples';

export function generateStaticParams() {
  return getAllDistrictSlugs().map((slug) => ({ district: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { district: string };
}): Promise<Metadata> {
  const district = getDistrict(params.district);
  if (!district) return {};
  return {
    title: district.displayName,
    description: `Explore the top temples in ${district.displayName}, Himachal Pradesh — spiritual sites, locations, and visitor highlights.`,
    openGraph: {
      title: `${district.displayName} Temples | Himachal Temples`,
      description: `Discover temples in ${district.displayName} district of Himachal Pradesh.`,
    },
  };
}

export default function DistrictPage({ params }: { params: { district: string } }) {
  const district = getDistrict(params.district);
  if (!district) notFound();
  return <Temples district={district} />;
}
