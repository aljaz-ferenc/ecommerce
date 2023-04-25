import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hbrtheedcngbriamntkr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnRoZWVkY25nYnJpYW1udGtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTkzMDMsImV4cCI6MTk5MzQzNTMwM30.wzsSUDOkBsd6hBz2RLvQFPV8GpZHWddpVVGCfEWJAfc'
const supabase = createClient(supabaseUrl, supabaseKey)

export async function getCategories(){
    let { data: categories, error } = await supabase
    .from('categories')
    .select('*')
   
  if(categories){
    return categories
  }
  if(error){
    return error
  }
}

export async function getCategoryItems(category){
    let { data: items, error } = await supabase
    .from(category)
    .select('*')
   
  if(items){
    return items
  }
  if(error){
    return error
  }
}

export async function getCategory(category){
    let { data: cat, error } = await supabase
    .from('categories')
    .select('*')
    .eq('category', category)
   
  if(cat){
    return cat
  }
  if(error){
    return error
  }
}

export async function getAllItems(){
    let { data: cat, error } = await supabase
    .from('items')
    .select('*')
   
  if(cat){
    return cat
  }
  if(error){
    return error
  }
}

export async function getSpecificItem(item){
    let { data: cat, error } = await supabase
    .from('items')
    .select('*')
    .eq('name', item)
   
  if(cat){
    return cat
  }
  if(error){
    return error
  }
}