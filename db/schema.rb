# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161105173224) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "allegiances", force: :cascade do |t|
    t.string   "house_name",     null: false
    t.string   "flag_image_url", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "place_images", force: :cascade do |t|
    t.integer  "place_id",   null: false
    t.string   "url",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "caption"
  end

  create_table "places", force: :cascade do |t|
    t.integer  "host_id",         null: false
    t.string   "title",           null: false
    t.float    "lng",             null: false
    t.float    "lat",             null: false
    t.text     "description"
    t.integer  "price_per_night", null: false
    t.integer  "region_id",       null: false
    t.integer  "number_rooms",    null: false
    t.integer  "number_beds"
    t.integer  "max_guests",      null: false
    t.string   "property_type"
    t.text     "house_rules"
    t.integer  "allegiance_id"
    t.integer  "stars"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "regions", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "place_id",        null: false
    t.integer  "author_id",       null: false
    t.integer  "number_of_stars", null: false
    t.text     "body"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "name"
    t.string   "image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.text     "about_me"
    t.integer  "allegiance_id"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
