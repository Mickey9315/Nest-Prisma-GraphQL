import { IsNotEmpty } from 'class-validator';
import { InputType, Field, Int } from '@nestjs/graphql';
import { ProductType, AttendanceType } from '@prisma/client';
import { VariantInput } from './variant.input';

@InputType()
export class CreateProductInput {
  @Field()
  @IsNotEmpty()
  slug: string;

  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  title_ar: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsNotEmpty()
  description_ar: string;

  @Field()
  @IsNotEmpty()
  image: string;

  @Field(() => ProductType)
  @IsNotEmpty()
  type: ProductType;

  @Field()
  @IsNotEmpty()
  vendorId: string;

  @Field(() => String, { nullable: true })
  categoryId?: string;

  @Field()
  @IsNotEmpty()
  active: boolean;

  @Field(() => Int, { nullable: true })
  minPreorderDays?: number;

  @Field(() => [VariantInput])
  variants?: VariantInput[];

  @Field(() => Int)
  noOfSeats?: number;

  @Field(() => [String], { nullable: true })
  tags: string[];

  @Field(() => Int)
  itemsInStock?: number;

  @Field(() => Int)
  sortOrder?: number;

  @Field(() => AttendanceType, { nullable: true })
  attendanceType?: AttendanceType;

  meetingLink?: string;

  location?: string;

  endTime?: boolean;

  customerLocation?: boolean;

  @Field(() => Int)
  duration?: number;

  @Field(() => String, { nullable: true })
  formId?: string;

  startDate?: Date;
  endDate?: Date;
}
