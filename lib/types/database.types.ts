export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          role: "realtor" | "buyer"
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name: string
          role: "realtor" | "buyer"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          role?: "realtor" | "buyer"
          created_at?: string
          updated_at?: string
        }
      }
      realtor_profiles: {
        Row: {
          id: string
          company: string | null
          phone: string | null
          bio: string | null
          invite_code: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          company?: string | null
          phone?: string | null
          bio?: string | null
          invite_code: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company?: string | null
          phone?: string | null
          bio?: string | null
          invite_code?: string
          created_at?: string
          updated_at?: string
        }
      }
      buyer_profiles: {
        Row: {
          id: string
          phone: string | null
          current_step: number
          realtor_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          phone?: string | null
          current_step?: number
          realtor_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          phone?: string | null
          current_step?: number
          realtor_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      step_progress: {
        Row: {
          id: string
          buyer_id: string
          step_number: number
          data: Json
          completed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          buyer_id: string
          step_number: number
          data?: Json
          completed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          buyer_id?: string
          step_number?: number
          data?: Json
          completed?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          sender_id: string
          recipient_id: string
          step_number: number | null
          content: string
          is_ai: boolean
          created_at: string
        }
        Insert: {
          id?: string
          sender_id: string
          recipient_id: string
          step_number?: number | null
          content: string
          is_ai?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          sender_id?: string
          recipient_id?: string
          step_number?: number | null
          content?: string
          is_ai?: boolean
          created_at?: string
        }
      }
      properties: {
        Row: {
          id: string
          address: string
          city: string
          state: string
          zip_code: string
          price: number
          beds: number
          baths: number
          sq_ft: number
          property_type: string
          year_built: number | null
          description: string | null
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          address: string
          city: string
          state: string
          zip_code: string
          price: number
          beds: number
          baths: number
          sq_ft: number
          property_type: string
          year_built?: number | null
          description?: string | null
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          address?: string
          city?: string
          state?: string
          zip_code?: string
          price?: number
          beds?: number
          baths?: number
          sq_ft?: number
          property_type?: string
          year_built?: number | null
          description?: string | null
          image_url?: string | null
          created_at?: string
        }
      }
      saved_properties: {
        Row: {
          id: string
          buyer_id: string
          property_id: string
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          buyer_id: string
          property_id: string
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          buyer_id?: string
          property_id?: string
          notes?: string | null
          created_at?: string
        }
      }
    }
  }
}
