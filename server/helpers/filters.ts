import { Application } from "express";
import { filter } from "../types.job";
import { FilterQuery } from "mongoose";
export default async function filterForApplicationView(
    filterDto: filter,
  ) {
   
  
    let filterQuery: FilterQuery<Application> = {
      // isDeleted: false,
    };
  
    let dateQuery: any = [];
    if (filterDto.startDate) {

      console.log(filterDto.startDate, 'filterDto.startDate');
  
      const startDate = new Date(filterDto.startDate);
      startDate.setHours(0, 0, 0, 0);
      dateQuery.push({ $gte: startDate });
    }
  
    if (filterDto.endDate) {
  
      console.log(filterDto.endDate, 'filterDto.endDate');
  
      const endDate = new Date(filterDto.endDate);
      endDate.setHours(23, 59, 59, 999);
      dateQuery.push({ $lte: endDate });
    }
  
    if (filterDto.startDate || filterDto.endDate) {
  
      filterQuery = {
        ...filterQuery,
  
        applied_on : {
          ...dateQuery[0],
          ...dateQuery[1],
        },
      };
    }
  
   
    return filterQuery;
  }
  