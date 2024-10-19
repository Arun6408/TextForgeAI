"use client";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from "next/link";
import React from 'react';

export interface CardProps {
  title: string;
  description: string;
  link: string;
  linkName: string;
}

const Card = ({ card }: { card: CardProps }) => {

  const openLink = () => {
    window.open(card.link, "_blank");
  };

  return (
    <div>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-80 h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {card.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {card.description}
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={80}
              as={Link}
              href={card.link}
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try Now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              onClick={openLink}
            >
              {card.linkName} →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default Card;
